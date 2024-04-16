function UserProfileManager() {
    this.users = []; 
    this.currentId = 0; 

    // Генерация уникального ID
    this.generateId = () => {
        return this.currentId++; 
    };

    // Добавление нового пользователя
    this.addUser = (userInfo) => {
        const user = {
            id: this.generateId(),
            name: userInfo.name,
            email: userInfo.email
        };
        this.users.push(user);
    };

    // Удаление пользователя по ID
    this.removeUser = (userId) => {
        this.users = this.users.filter(user => user.id !== userId);
    };

    // Обновление данных пользователя
    this.updateUser = (userId, newInfo) => {
        const user = this.users.find(user => user.id === userId);
        if (user) {
            user.name = newInfo.name ?? user.name;
            user.email = newInfo.email ?? user.email; 
        }
    };

    // Поиск пользователей по имени
    this.findUserByName = (name) => {
        return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    };

    // Получение всех пользователей
    this.getAllUsers = () => {
        return this.users;
    };
}

const manager = new UserProfileManager();
manager.addUser({ name: 'Иван Петров', email: 'ivan@example.com' });
manager.addUser({ name: 'Петр Иванов', email: 'petr@example.com' });

console.log(manager.getAllUsers()); 

manager.updateUser(0, { name: 'Иван Сидоров' });

console.log(manager.findUserByName('Иван'));

manager.removeUser(1); 

console.log(manager.getAllUsers()); 
