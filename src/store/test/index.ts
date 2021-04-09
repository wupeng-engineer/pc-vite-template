import { Observable } from 'rxjs';
import { BaseStore } from '@/store/base';
import { Singleton } from '@/utils/singleton';

class TestStore extends BaseStore<{
  id: number,
  name: string
}> {

  protected init(): Observable<{ id: number; name: string }> | Promise<{ id: number; name: string }> | { id: number; name: string } {
    return new Observable((s) => {
      setTimeout(() => {
        s.next({ id: 1, name: '张三' });
      }, 3000);
    });

    // return new Promise((resolve,reject) => {
    //   setTimeout(() => {
    //     reject('1231231231');
    //   }, 2000);
    // });

    // return  { id: 1, name: '张三' };

    // return null;
  }

  protected setup() {
    //alert(err);
  }

}

export default Singleton.make(TestStore);
