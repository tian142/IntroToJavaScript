const annoyer = {
    phrases: ['hi', 'ihihihiij', 'hihihihihihi'],
    pickPhrase() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
};
