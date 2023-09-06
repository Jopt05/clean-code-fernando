(() => {

    // Objetos como propiedades

    type Gender = 'M'|'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email, name, birthdate, gender, role}: UserProps){
            super({ name, birthdate, gender });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenedFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor({
            workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenedFolder: 'home',
        birthdate: new Date(),
        email: 'jopt98@gmail.com',
        gender: 'F',
        name: 'Jesus',
        role: 'Admin'
    })

});