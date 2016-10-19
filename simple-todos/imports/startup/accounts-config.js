/**
 * Created by SchubertDavidRodriguez on 9/21/16.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});
