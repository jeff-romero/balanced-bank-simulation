import { Account } from './app/shared/models/account';

export const sampleAccounts: Account[] = [
    {
        accountNumber: 5555555555,
        email: 'jdoe123@mymail.com',
        hashedPassword: '99d5b9f4a71257cbbcf2e0245a7d90d2928f857f6ed004124b396c3ecd51eb97',
        firstName: 'John',
        lastName: 'Doe',
        checkingBalance: 24563,
        savingsBalance: 156798,
        transactions: [
            {
                srcAccountNum: 5555555555,
                dstAccountNum: 7429995109,
                amount: 952,
                dayOfWeek: 'Monday',
                month: 'June',
                dayOfMonth: 21,
                year: 2026,
                hour: 11,
                minute: 17,
                second: 2,
                meridiem: 'AM',
                timezone: 'GMT+01:00'
            },
            {
                srcAccountNum: 5555555555,
                dstAccountNum: 1212121212,
                amount: 20,
                dayOfWeek: 'Friday',
                month: 'February',
                dayOfMonth: 10,
                year: 2026,
                hour: 14,
                minute: 53,
                second: 47,
                meridiem: 'PM',
                timezone: 'GMT+01:00'
            }
        ]
    },
    {
        accountNumber: 7429995109,
        email: 'jsmith@realmail.com',
        hashedPassword: '8a5de6c53d649ae79d24cb64751443413156c659efa356bff2014d3ef40a1477',
        firstName: 'Jane',
        middleName: 'Capo',
        lastName: 'Smith',
        checkingBalance: 60721,
        savingsBalance: 821112,
        transactions: [
            {
                srcAccountNum: 5555555555,
                dstAccountNum: 7429995109,
                amount: 952,
                dayOfWeek: 'Monday',
                month: 'June',
                dayOfMonth: 21,
                year: 2026,
                hour: 11,
                minute: 17,
                second: 2,
                meridiem: 'AM',
                timezone: 'GMT+01:00'
            }
        ]
    },
    {
        accountNumber: 1212121212,
        email: 'noxusforever@mymail.com',
        hashedPassword: 'a015d8406205ad1e6b8f76e55a7e7aeb85211a32e55f497ca1dbd78aac5c2666',
        firstName: 'Darius',
        lastName: 'Noxus',
        checkingBalance: 503,
        savingsBalance: 2407,
        transactions: [
            {
                srcAccountNum: 5555555555,
                dstAccountNum: 1212121212,
                amount: 20,
                dayOfWeek: 'Friday',
                month: 'February',
                dayOfMonth: 10,
                year: 2026,
                hour: 14,
                minute: 53,
                second: 47,
                meridiem: 'PM',
                timezone: 'GMT+01:00'
            }
        ]
    },
    {
        accountNumber: 8945613373,
        email: 'bronzehero2021@lanecamp.com',
        hashedPassword: '21bc36666163ff49018c0a51ba21d164582f3562ad147676b15f411b5f279e89',
        firstName: 'Teemo',
        lastName: 'Shrewm',
        checkingBalance: 972
    }
];
