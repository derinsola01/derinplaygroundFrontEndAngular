// import { Component, OnInit } from '@angular/core';
// import { MbscEventcalendarOptions,  } from '@mobiscroll/angular';
// import { HttpClient } from '@angular/common/http';


// let API_KEY = '<YOUR_API_KEY>';
// let CLIENT_ID = '<YOUR_CLIENT_ID>';

// const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
// const now = new Date();
// let calApiLoaded;
// let firstDay;
// let lastDay;
// const win: any = window;

// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {
//     ngOnInit() {
//         // Load the Google API Client
//         win.onGoogleLoad = () => {
//             win.gapi.load('client', this.initClient);
//         }
//         win.loadGoogleSDK();
//     }

//     // Load the SDK asynchronously
//     loadGoogleSDK = () => {
//         (function (d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) {
//                 win.onGoogleLoad();
//                 return;
//             }
//             js = d.createElement(s);
//             js.id = id;
//             js.src = "https://apis.google.com/js/api.js?onload=onGoogleLoad";
//             js.onload = "onGoogleLoad";
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'google-jssdk'));
//     };

//     // Init the Google API client
//     initClient = () => {
//         win.gapi.client.init({
//             apiKey: API_KEY,
//             clientId: CLIENT_ID,
//             discoveryDocs: DISCOVERY_DOCS,
//             scope: SCOPES
//         }).then(() => {
//             calApiLoaded = true;
//             this.loadEvents(firstDay, lastDay);
//         });
//     }

//     // Load events from Google Calendar between 2 dates
//     loadEvents = (firstDay, lastDay) => {
//         // Only load events if the Google API finished loading
//         if (calApiLoaded) {
//             win.gapi.client.calendar.events.list({
//                 'calendarId': CALENDAR_ID,
//                 'timeMin': firstDay.toISOString(),
//                 'timeMax': lastDay.toISOString(),
//                 'showDeleted': false,
//                 'singleEvents': true,
//                 'maxResults': 100,
//                 'orderBy': 'startTime'
//             }).then((response) => {
//                 let event;
//                 let events = response.result.items;
//                 let eventList = [];
//                 let end;
//                 // Process event list
//                 for (var i = 0; i < events.length; ++i) {
//                     event = events[i];
//                     end = new Date(event.end.date || event.end.dateTime)

//                     eventList.push({
//                         start: new Date(event.start.date || event.start.dateTime),
//                         end: event.end.date ? new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1) : end,
//                         title: event.summary || 'No Title',
//                         allDay: !event.start.dateTime
//                     });
//                 }
//                 // Pass the processed events to the calendar
//                 this.events = eventList;
//             });
//         }
//     }

//     calSettings: MbscEventcalendarOptions = {
//         theme: 'ios',
//         themeVariant: 'light',
//         dragToCreate: false,
//         dragToMove: false,
//         dragToResize: false,
//         view: {
//             calendar: {
//                 labels: true
//             }
//         },
//         onPageLoading: (event) => {
//             const year = event.firstDay.getFullYear();
//             const month = event.firstDay.getMonth();

//             // Calculate dates
//             // (pre-load events for previous and next months as well)
//             firstDay = new Date(year, month - 1, -7);
//             lastDay = new Date(year, month + 2, 14);

//             this.loadEvents(firstDay, lastDay);
//         }
//     };
// }
