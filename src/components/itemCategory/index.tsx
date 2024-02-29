import { TableCommon } from '@/common'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import ItemCategoryModal from './ItemCategoryModal'
import ItemCategoryTable from './ItemCategoryTable'
import { Box } from '@mui/material'
interface ItemCategoryProps {
  handleOpenModal(): void
  handleCloseModal(): void
  openAddItemModal: boolean
  AddItemCategoryFormik: any
}

const ItemCategory: FC<ItemCategoryProps> = ({ handleCloseModal, handleOpenModal, openAddItemModal, AddItemCategoryFormik }) => {
  const tableData = [
    {
      si: 1,
      item: 'diesel'
    }

  ]
  return <Box className={`min-h-[90vh]`}>
    <TableCommon
      title={text.tableTitles.itemCategory}
      btnName={text.add.addItemCategory}
      titleCls={`font-bold text-black text-3xl mb-5`}
      addComponent={<ItemCategoryModal handleAdd={AddItemCategoryFormik.handleSubmit}
        handleClose={handleCloseModal} formik={AddItemCategoryFormik}
        itemCategoryModalOpenState={openAddItemModal} />}
      handleOpenButton={handleOpenModal}
      tableComponent={<ItemCategoryTable ItemDatas={tableData} />}
    />
  </Box>
}

export default ItemCategory