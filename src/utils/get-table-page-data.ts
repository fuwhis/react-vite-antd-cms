import { PageData } from '@/interface';

export const getTableData = <T extends any[]>(pageNum = 1, pageSize = 10, totalData: T) => {
  const total: number = totalData.length;
  const tableData: PageData<T[0]> = {
    data: [],
    pageNum,
    pageSize,
    total,
  };

  if (pageSize >= total) {
    // pageSize is greater than or equal to the total data length, indicating that there is only 1 page of data or no data
    tableData.data = totalData;
    tableData.pageNum = 1; // Take the first page directly
  } else {
    // pageSize is less than the total data length, and the data exceeds 1 page
    const num = pageSize * (pageNum - 1); // Calculate the total number of all data before the current page (excluding)

    if (num < total) {
      // If the total number of all data before the current page is less than (not equal to) the total data set length, it means that the current page number does not exceed the maximum page number
      const startIndex = num; // The index of the first data on the current page in the total data set
      const endIndex = num + pageSize - 1; // The last data index of the current page

      tableData.data = totalData.filter((_, index) => index >= startIndex && index <= endIndex); // When the number of data items on the current page is less than the maximum number of items per page, the data is also filtered according to the range of the maximum number of items
    } else {
      // The current page number exceeds the maximum page number, then calculate the page of the actual last page, and automatically return the data of the last page
      const size = Math.ceil(total / pageSize); // take business
      const rest = total % pageSize; // take the remainder

      if (rest > 0) {
        // If the remainder is greater than 0, it means that the actual data on the last page is less than pageSize, and size+1 should be taken as the page number of the last item
        tableData.pageNum = size + 1; //当前页码重置，取size+1
        tableData.data = totalData.filter((_, index) => index >= pageSize * size && index <= total);
      } else if (rest === 0) {
        // The remainder is equal to 0, and the number of data items on the last page is exactly pageSize
        tableData.pageNum = size; // Reset the current page number, take size
        tableData.data = totalData.filter((_, index) => index >= pageSize * (size - 1) && index <= total);
      } // Note: the remainder cannot be less than 0
    }
  }

  return tableData;
};
