import axios from "@/utils/http"

export const me = params => axios.get('users/me', { params })
