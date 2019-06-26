const localStorage: {[key: string]: string} = {
  username: 'penguin',
  userId: '5cde33fc'
};

function storageProp(prop?: string) {
  return (target: any, key: string) => {
    Object.defineProperty(target, key, {
      get() {
        return prop? localStorage[prop] : localStorage[key];
      },

      set(val: string) {
        if(prop) {
          localStorage[prop] = val;
        } else {
          localStorage[key] = val;
        }
      }
    });
  }
}

class MyComponent {

  @storageProp()
  username: string;

  @storageProp('userId')
  id: string;
}

const component = new MyComponent();
console.log(component.username);