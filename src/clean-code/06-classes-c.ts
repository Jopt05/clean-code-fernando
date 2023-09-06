(() => {

    // Aplicando responsabilidad única
    // Priorizar composición ante herencia

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
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role}: UserProps){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenedFolder: string,
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor({
            workingDirectory,
            lastOpenedFolder
        }: SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
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

    class UserSettings {
        // Composición de otras clases 
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenedFolder
        }: UserSettingsProps){
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenedFolder });
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

    console.log({ userSettings });
    console.log( userSettings.person.birthdate );

})();