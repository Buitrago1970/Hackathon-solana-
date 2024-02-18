'use client';

import { Landing } from '../landing/landing';
import { CampaignCard } from '../campaign-card/campaign-card';
import { onSnapshot, collection } from 'firebase/firestore';
import db, { auth } from '../../firebase.js';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState<any[]>(
    //   [
    //   {
    //     id_user: {
    //       converter: null,
    //       _key: {
    //         path: {
    //           segments: [
    //             'projects',
    //             'ecoecho-ba1f6',
    //             'databases',
    //             '(default)',
    //             'documents',
    //             'users',
    //             'ISjBWLD112ClSDKDDpPmg',
    //           ],
    //           offset: 5,
    //           len: 2,
    //         },
    //       },
    //       type: 'document',
    //       firestore: {
    //         app: {
    //           _isDeleted: false,
    //           _options: {
    //             apiKey: 'AIzaSyAhRnfqffZQHzdInGExpVS8mlbdRbMA0ao',
    //             authDomain: 'ecoecho-ba1f6.firebaseapp.com',
    //             projectId: 'ecoecho-ba1f6',
    //             storageBucket: 'ecoecho-ba1f6.appspot.com',
    //             messagingSenderId: '278716934015',
    //             appId: '1:278716934015:web:e29dfd25d9cbe7ef099c4a',
    //             measurementId: 'G-BZFZZPZXJ4',
    //           },
    //           _config: {
    //             name: '[DEFAULT]',
    //             automaticDataCollectionEnabled: false,
    //           },
    //           _name: '[DEFAULT]',
    //           _automaticDataCollectionEnabled: false,
    //           _container: { name: '[DEFAULT]', providers: {} },
    //         },
    //         databaseId: { projectId: 'ecoecho-ba1f6', database: '(default)' },
    //         settings: {
    //           host: 'firestore.googleapis.com',
    //           ssl: true,
    //           ignoreUndefinedProperties: false,
    //           cacheSizeBytes: 41943040,
    //           experimentalForceLongPolling: false,
    //           experimentalAutoDetectLongPolling: true,
    //           experimentalLongPollingOptions: {},
    //           useFetchStreams: true,
    //         },
    //       },
    //     },
    //     current_count: 300,
    //     title: 'Conservación de la biodiversidad',
    //     location: '34.052235, -118.243683',
    //     goal: 500,
    //     detail: 'campaña de conservación del hábitat',
    //   },
    //   {
    //     location: '40.730610, -73.935242',
    //     title: 'Reforestación en la ciudad',
    //     goal: 150,
    //     current_count: 100,
    //     id_user: {
    //       converter: null,
    //       _key: {
    //         path: {
    //           segments: [
    //             'projects',
    //             'ecoecho-ba1f6',
    //             'databases',
    //             '(default)',
    //             'documents',
    //             'users',
    //             'ISjBJv1CUClSZUGspPmg',
    //           ],
    //           offset: 5,
    //           len: 2,
    //         },
    //       },
    //       type: 'document',
    //       firestore: {
    //         app: {
    //           _isDeleted: false,
    //           _options: {
    //             apiKey: 'AIzaSyAhRnfqffZQHzdInGExpVS8mlbdRbMA0ao',
    //             authDomain: 'ecoecho-ba1f6.firebaseapp.com',
    //             projectId: 'ecoecho-ba1f6',
    //             storageBucket: 'ecoecho-ba1f6.appspot.com',
    //             messagingSenderId: '278716934015',
    //             appId: '1:278716934015:web:e29dfd25d9cbe7ef099c4a',
    //             measurementId: 'G-BZFZZPZXJ4',
    //           },
    //           _config: {
    //             name: '[DEFAULT]',
    //             automaticDataCollectionEnabled: false,
    //           },
    //           _name: '[DEFAULT]',
    //           _automaticDataCollectionEnabled: false,
    //           _container: { name: '[DEFAULT]', providers: {} },
    //         },
    //         databaseId: { projectId: 'ecoecho-ba1f6', database: '(default)' },
    //         settings: {
    //           host: 'firestore.googleapis.com',
    //           ssl: true,
    //           ignoreUndefinedProperties: false,
    //           cacheSizeBytes: 41943040,
    //           experimentalForceLongPolling: false,
    //           experimentalAutoDetectLongPolling: true,
    //           experimentalLongPollingOptions: {},
    //           useFetchStreams: true,
    //         },
    //       },
    //     },
    //     detail: 'campaña de reforestación urbana',
    //   },
    //   {
    //     location: '51.5074° N, 0.1278° W',
    //     id_user: {
    //       converter: null,
    //       _key: {
    //         path: {
    //           segments: [
    //             'projects',
    //             'ecoecho-ba1f6',
    //             'databases',
    //             '(default)',
    //             'documents',
    //             'users',
    //             'ISjBWLD112ClSLDw291933',
    //           ],
    //           offset: 5,
    //           len: 2,
    //         },
    //       },
    //       type: 'document',
    //       firestore: {
    //         app: {
    //           _isDeleted: false,
    //           _options: {
    //             apiKey: 'AIzaSyAhRnfqffZQHzdInGExpVS8mlbdRbMA0ao',
    //             authDomain: 'ecoecho-ba1f6.firebaseapp.com',
    //             projectId: 'ecoecho-ba1f6',
    //             storageBucket: 'ecoecho-ba1f6.appspot.com',
    //             messagingSenderId: '278716934015',
    //             appId: '1:278716934015:web:e29dfd25d9cbe7ef099c4a',
    //             measurementId: 'G-BZFZZPZXJ4',
    //           },
    //           _config: {
    //             name: '[DEFAULT]',
    //             automaticDataCollectionEnabled: false,
    //           },
    //           _name: '[DEFAULT]',
    //           _automaticDataCollectionEnabled: false,
    //           _container: { name: '[DEFAULT]', providers: {} },
    //         },
    //         databaseId: { projectId: 'ecoecho-ba1f6', database: '(default)' },
    //         settings: {
    //           host: 'firestore.googleapis.com',
    //           ssl: true,
    //           ignoreUndefinedProperties: false,
    //           cacheSizeBytes: 41943040,
    //           experimentalForceLongPolling: false,
    //           experimentalAutoDetectLongPolling: true,
    //           experimentalLongPollingOptions: {},
    //           useFetchStreams: true,
    //         },
    //       },
    //     },
    //     detail: 'campaña de educación ambiental',
    //     title: 'Educación para el cambio',
    //     current_count: 800,
    //     goal: 1000,
    //   },
    //   {
    //     id_user: {
    //       converter: null,
    //       _key: {
    //         path: {
    //           segments: [
    //             'projects',
    //             'ecoecho-ba1f6',
    //             'databases',
    //             '(default)',
    //             'documents',
    //             'users',
    //             'ISjBJv1CUClSDKDDpPmg',
    //           ],
    //           offset: 5,
    //           len: 2,
    //         },
    //       },
    //       type: 'document',
    //       firestore: {
    //         app: {
    //           _isDeleted: false,
    //           _options: {
    //             apiKey: 'AIzaSyAhRnfqffZQHzdInGExpVS8mlbdRbMA0ao',
    //             authDomain: 'ecoecho-ba1f6.firebaseapp.com',
    //             projectId: 'ecoecho-ba1f6',
    //             storageBucket: 'ecoecho-ba1f6.appspot.com',
    //             messagingSenderId: '278716934015',
    //             appId: '1:278716934015:web:e29dfd25d9cbe7ef099c4a',
    //             measurementId: 'G-BZFZZPZXJ4',
    //           },
    //           _config: {
    //             name: '[DEFAULT]',
    //             automaticDataCollectionEnabled: false,
    //           },
    //           _name: '[DEFAULT]',
    //           _automaticDataCollectionEnabled: false,
    //           _container: { name: '[DEFAULT]', providers: {} },
    //         },
    //         databaseId: { projectId: 'ecoecho-ba1f6', database: '(default)' },
    //         settings: {
    //           host: 'firestore.googleapis.com',
    //           ssl: true,
    //           ignoreUndefinedProperties: false,
    //           cacheSizeBytes: 41943040,
    //           experimentalForceLongPolling: false,
    //           experimentalAutoDetectLongPolling: true,
    //           experimentalLongPollingOptions: {},
    //           useFetchStreams: true,
    //         },
    //       },
    //     },
    //     detail: 'campaña de arboles para cercar',
    //     current_count: 120,
    //     goal: 200,
    //     location: '4.652073901832305, -74.07542996103952',
    //     title: 'Campaña de cercado',
    //   },
    //   {
    //     location: '4.63048788723692, -74.0457236687981',
    //     goal: 1500,
    //     title: 'Reduce tu huella de carbono',
    //     detail: 'Campaña para bajar huella de carbono',
    //     current_count: 34,
    //   },
    //   {
    //     location: '4.63048788723692, -74.0457236687981',
    //     goal: 1500,
    //     title: 'Reduce tu huella de carbono',
    //     detail: 'Campaña para bajar huella de carbono',
    //     current_count: 34,
    //   },
    //   {
    //     location: '4.63048788723692, -74.0457236687981',
    //     goal: 1500,
    //     title: 'Reduce tu huella de carbono',
    //     detail: 'Campaña para bajar huella de carbono',
    //     current_count: 34,
    //   },
    // ]
    []
  );

  useEffect(() => {
    onSnapshot(collection(db, 'campaigns'), (snapshot) => {
      setCampaigns(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className='h-screen'>

      <div className='flex flex-row flex-wrap justify-around mt-2'>
        {campaigns.map((campaign: any) => {
          return (
            <CampaignCard
              key={campaign.id}
              title={campaign.title}
              location={campaign.location}
              detail={campaign.detail}
              id={0}
              goal={campaign.goal}
              currentCount={campaign.current_count}
            />
          );
        })}
      </div>
    </div>
  );
}
