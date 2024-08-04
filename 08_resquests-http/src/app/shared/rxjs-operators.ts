import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse, HttpProgressEvent } from '@angular/common/http';

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      // Verifique se event.total está definido antes de usá-lo
      if (event.total) {
        cb(Math.round((event.loaded * 100) / event.total));
      } else {
        cb(0); // Ou trate o caso onde total é undefined
      }
    }
  });
}
