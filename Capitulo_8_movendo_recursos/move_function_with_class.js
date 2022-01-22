// Move Function (Mover função com classes)

// Antes
class Account {
    #daysOverdawn

    get backCharge() {
        let result = 4.5
        if(this.#daysOverdawn > 0) result += this.overdraftCharge
        return result
    }

    get overdraftCharge() {
        if(this.type.isPremium) {
            const baseCharge = 10
            if(this.#daysOverdawn <= 7)
                return baseCharge
            else 
                return baseCharge + (this.#daysOverdawn - 7) * 0.85
        } else {
            return this.#daysOverdawn * 1.75
        }
    }
}

// Depois
class Account {
    #daysOverdrawn
    #type = new AccountType()

    get backCharge() {
        let result = 4.5
        if(this.#daysOverdrawn > 0) result += this.overdraftCharge
        return result
    }


    get overdraftCharge() {
        return this.#type.overdraftCharge(this)
    }
}

class AccountType {
    #isPremium

    overdraftCharge(account) {
        if(this.isPremium) {
            const baseCharge = 10
            if(account.daysOverdrawn <= 7)
                return baseCharge
            else 
                return baseCharge + (account.daysOverdrawn - 7) * 0.85
        } else {
            return account.daysOverdrawn * 1.75
        }
    }
}