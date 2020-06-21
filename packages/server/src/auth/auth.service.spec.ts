import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { ConflictException } from '@nestjs/common';

const mockUserRepository = () => ({
  signUp: jest.fn(),
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
      expect(repo.signUp).toHaveBeenCalledWith(authCredDto);
    });
    test('Throws a conoflict exception when username or email exists', async () => {
      save.mockRejectedValue({ code: '23505' });
      expect(service.signUp(authCredDto)).rejects.toThrow(ConflictException);
    });
  });
  describe('signIn', () => {
    const loginDto = {
      user: 'fakeuser',
      password: 'fakepassword',
    };
  });
});
