if (isChecked) {
          localStorage.setItem('USER_TOKEN', response.data.accessToken);
        }
        if (!isChecked) {
          sessionStorage.setItem('USER_TOKEN', response.data.accessToken);
        }
