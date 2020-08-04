import axios from "@/utils/http"

export const login = data => axios.post('auth/login', data)

// 检测账号是否存在，否则发送邮箱认证链接
export const attempt = data => axios.post('auth/attempt', data)
