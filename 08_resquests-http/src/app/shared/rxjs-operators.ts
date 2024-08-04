import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse, HttpProgressEvent } from '@angular/common/http';

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>): event is HttpResponse<T> => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      const progressEvent = event as HttpProgressEvent;
      if (progressEvent.total) {
        cb(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      } else {
        cb(0);
      }
    }
  });
}
