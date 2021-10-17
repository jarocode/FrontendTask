export const yearOptions = () => {
    let yearArr = [];
    let date = new Date();
    for(let i = date.getFullYear(); i >= 2002 ; i--){
        yearArr.push(i);
    }
    return yearArr;
}