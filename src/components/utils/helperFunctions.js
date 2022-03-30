

export const onSearch = (value,data,setData) => {
    let sortedArr = [...data];

    if (value !== '') {
        if (+value !== +value) {
            sortedArr = sortedArr.filter((elem) => elem.name == value);
            setData(sortedArr);
        } else {
            sortedArr = sortedArr.filter((elem) => elem.age == value);
            setData(sortedArr);
        }
    }
}
export const tableOnChange = (values,setData) => {
    setData(values.extra.currentDataSource);
}