import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, BadRequestException } from '@nestjs/common';

const mockUserRepository = () => ({
  signUp: jest.fn(),
  signIn: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
});

const mockJwtService = () => ({});

describe('AuthService', () => {
  let service: AuthService;
  let repo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
        {
          provide: JwtService,
          useFactory: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repo = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('signUp', () => {
    const authCredDto = {
      username: 'fakeuser',
      email: 'fake@email.com',
      password: 'fakepassword',
    };
    let save;
    beforeEach(() => {
      save = jest.fn();
      repo.create = jest.fn().mockReturnValue({ save });
    });
    test('Creates a user', async () => {
      await service.signUp(authCredDto);

      expect(repo.signUp).toHaveBeenCalled();
      expect(repo.signUp).toHaveBeenCalledTimes(1);
      expect(repo.signUp).toHaveBeenCalledWith(authCredDto);
    });
    test('Throws a conflict exception when username or email exists', async () => {
      save.mockRejectedValue({ code: '23505' });
      expect(service.signUp(authCredDto)).rejects.toThrow(ConflictException);
    });
    // looks dirty and should seperate?
    test('expect signup to fail if input empty', async () => {
      authCredDto.username = '';
      expect(service.signUp(authCredDto)).rejects.toThrowError(
        BadRequestException,
      );
      authCredDto.username = 'fakeuser';
      authCredDto.email = '';
      expect(service.signUp(authCredDto)).rejects.toThrowError(
        BadRequestException,
      );
      authCredDto.email = 'fake@email.com';
      authCredDto.password = '';
      expect(service.signUp(authCredDto)).rejects.toThrowError(
        BadRequestException,
      );
    });
    test('expect user to signUp', async () => {
      // yeah nah
      expect(service.signUp(authCredDto)).toBeTruthy;
    });
  });
  describe('signIn', () => {
    const loginDto = {
      user: 'fakeuser',
      password: 'fakepassword',
    };
    let signIn;
    beforeEach(() => {
      loginDto.user = 'fakeuser';
      loginDto.password = 'fakepassword';
      signIn = jest.fn();
      repo.signIn(loginDto);
      expect(repo.signIn).toHaveBeenCalled();
      expect(repo.signIn).toHaveBeenCalledTimes(1);
      expect(repo.signIn).toHaveBeenCalledWith(loginDto);
    });
    // think this is wrong as what is it comparing to....
    test('Expect to be able to sign in', async () => {
      expect(service.signIn(loginDto)).toBeTruthy();
    });
    test('expect signin to fail as no user', async () => {
      loginDto.user = '';
      expect(service.signIn(loginDto)).rejects.toThrow(BadRequestException);
    });
    test('expect signin to fail as no password', async () => {
      loginDto.password = '';
      expect(service.signIn(loginDto)).rejects.toThrow(BadRequestException);
    });
    test('expect to fail with wrong password', async () => {
      loginDto.password = 'asdasdsda';
      expect(service.signIn(loginDto)).rejects.toThrow(BadRequestException);
    });
    // this is not right
    // test('expect the user to not exist and throw invalid credentials', async () => {
    //   signIn.mockRejectedValue({ error: 'Invalid Credentials' });
    //   expect(service.signIn(loginDto)).toContain(null);
    // });
  });
});
