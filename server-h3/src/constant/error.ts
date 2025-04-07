export const ERRORS = {
  BAD_REQUEST: {
    code: 400,
    message: '请求参数错误',
  },
  UNAUTHORIZED: {
    code: 401,
    message: '未授权（未登录或token过期）',
  },
  FORBIDDEN: {
    code: 403,
    message: '拒绝访问（没有权限）',
  },
  NOT_FOUND: {
    code: 404,
    message: '资源未找到',
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: '请求方法不被允许',
  },
  CONFLICT: {
    code: 409,
    message: '请求冲突（如资源已存在）',
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    message: '请求格式正确但无法处理（参数校验失败）',
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: '服务器内部错误',
  },
  NOT_IMPLEMENTED: {
    code: 501,
    message: '服务器未实现请求功能',
  },
  BAD_GATEWAY: {
    code: 502,
    message: '网关错误',
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: '服务不可用',
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: '网关超时',
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    message: '请求过于频繁',
  },
  LOGIN_FAILED: {
    code: 1001,
    message: '登录失败（用户名或密码错误）',
  },
  TOKEN_EXPIRED: {
    code: 1002,
    message: 'token已过期',
  },
  TOKEN_INVALID: {
    code: 1003,
    message: '无效的token',
  },
  VALIDATION_FAILED: {
    code: 1004,
    message: '参数校验失败',
  },
  DATA_NOT_EXIST: {
    code: 1005,
    message: '数据不存在',
  },
  DATA_ALREADY_EXIST: {
    code: 1006,
    message: '数据已存在',
  },
  PERMISSION_DENIED: {
    code: 1007,
    message: '没有操作权限',
  },
} as const;
