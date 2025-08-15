import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GeocodeService {
  private geocoder?: google.maps.Geocoder;
  private loader = new Loader({
    apiKey: environment.googleMapsApiKey,     // <- store in environments
    // libraries: ['geocoding'] // optional for modular loading
  });

  private ready(): Promise<void> {
    return this.loader.load().then(() => {
      if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
    });
  }

  geocodeAddress(address: string): Observable<google.maps.LatLngLiteral> {
    return from(this.ready()).pipe(
      switchMap(
        () =>
          new Observable<google.maps.LatLngLiteral>((observer) => {
            this.geocoder!.geocode({ address }, (results, status) => {
              if (status === 'OK' && results[0]) {
                const loc = results[0].geometry.location;
                observer.next({ lat: loc.lat(), lng: loc.lng() });
              } else {
                observer.error(new Error(`Geocoding failed: ${status}`));
              }
              observer.complete();
            });
          })
      )
    );
  }
}