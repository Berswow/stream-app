export const formatDate = (dateString: string) => {
    const date = new Date(dateString);  // Создаем объект Date из строки


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    const day = date.getDate();
    const month = months[date.getMonth()];  // Получаем месяц по индексу
    const year = date.getFullYear();


    return `${day} ${month} ${year}`;
};