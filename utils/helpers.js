module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    },
    truncate_text: (text) => {
        if(text.length > 255)
            return text.substring(0,255) + '...';
        else
            return text;
    },
}

