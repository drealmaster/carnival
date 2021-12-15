// import axios from 'axios'
import React, { useContext, useState,} from 'react'
// import { products_url as url } from '../utils/constants'

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ProductsContext.Provider  value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
