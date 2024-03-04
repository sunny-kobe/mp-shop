import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 分类列表-小程序
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult[]>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
