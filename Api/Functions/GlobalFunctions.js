import Toast from 'react-native-root-toast';
import Api from '../Api';
import OwnStorage from '../StorageController';
var Localdata = new OwnStorage();

const Global_Functions = {
  Login: function (LoginData) {
    let path = 'StationCommunications/Auth';

    Api.request('post', path, LoginData)
      .then(response => {
        console.log(response.response.data.wt);
        Localdata.setvalue('api_token', response.response.data.wt);
        Toast.show('Logged in successfully');
      })
      .catch(error => {
        console.log(error);
        for (const [key, value] of Object.entries(error.response.data.errors)) {
          console.log(`${key}: ${value}`);
          Toast.show(`${key}: ${value}`);
        }
      });
  },
};

export default Global_Functions;
