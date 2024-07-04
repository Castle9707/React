import { useState, useEffect } from 'react'
import Link from 'next/link'
import BS5Pagination from '@/components/common/bs5-pagination'

// products資料樣貌(shape):
// [
//   {
//     "id": 1,
//     "picture": "https://via.placeholder.com/150",
//     "stock": 5,
//     "name": "iPhone 12 Pro",
//     "brand": "Apple",
//     "price": 25000,
//     "tags": "蘋果,大螢幕"
//   }
// ]

export default function List() {
  // 注意1: 初始值至少要空白陣列。初次render是用初始值，需要對應伺服器回應的資料類型。
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型(一定要是陣列)

  // 最後得到的資料
  const [total, setTotal] = useState(0) // 總筆數
  const [pageCount, setPageCount] = useState(0) // 總頁數
  const [products, setProducts] = useState([]) // 商品資料陣列

  // 排序用
  const [orderby, setOrderby] = useState({ sort: 'id', order: 'asc' })

  // 分頁用 (這裡用的初始值都與伺服器的預設值一致)
  const [page, setPage] = useState(1) // 目前第幾頁
  const [perpage, setPerpage] = useState(10) // 每頁幾筆資料

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProducts = async (params = {}) => {
    const baseUrl = 'http://localhost:3005/api/my-products'
    // 轉換為查詢字串
    const searchParams = new URLSearchParams(params)
    const url = `${baseUrl}?${searchParams.toString()}`

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 伺服器回應資料格式
      // {
      //   "status": "success",
      //   "data": {
      //     "total": 100,
      //     "pageCount": 10,
      //     "page": 1,
      //     "perpage": 10,
      //     "products": [...]
      //   }

      if (resData.status === 'success') {
        // 設定回應用的狀態
        setPageCount(resData.data.pageCount)
        setTotal(resData.data.total)

        // 檢查是否為陣列資料類型(基本保護)
        if (Array.isArray(resData.data.products)) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setProducts(resData.data.products)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式3: didMount+didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
    }

    // 呼叫與伺服器作fetch獲得資料
    getProducts(params)
  }, [page, perpage, orderby])

  return (
    <>
      <h1>商品列表頁</h1>
      <hr />
      <button
        onClick={() => {
          // 最小頁面是1(不能小於1)
          const nextPage = page - 1 > 1 ? page - 1 : 1
          setPage(nextPage)
        }}
      >
        上一頁
      </button>
      <button
        onClick={() => {
          // 最大頁面是pageCount
          const nextPage = page + 1 < pageCount ? page + 1 : pageCount
          setPage(nextPage)
        }}
      >
        下一頁
      </button>
      目前頁面 {page} / 總頁數 {pageCount} / 總筆數: {total}
      <div>
        <label>
          排序
          <select
            value={`${orderby.sort},${orderby.order}`}
            onChange={(e) => {
              const tv = e.target.value
              setOrderby({
                sort: tv.split(',')[0],
                order: tv.split(',')[1],
              })
            }}
          >
            <option value="id,asc">ID排序(由小到大)</option>
            <option value="id,desc">ID排序(由大到小)</option>
            <option value="price,asc">價格排序(由小到大)</option>
            <option value="price,desc">價格排序(由大到小)</option>
          </select>
        </label>
      </div>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0704/products/${v.id}`}>
                {v.name}/{v.price}
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        {/* 加入分頁列元件 */}
        <BS5Pagination
          forcePage={page - 1}
          onPageChange={(e) => {
            setPage(e.selected + 1)
          }}
          pageCount={pageCount}
        />
      </div>
    </>
  )
}