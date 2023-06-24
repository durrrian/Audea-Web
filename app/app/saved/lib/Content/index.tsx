'use client';

import { IGetAllContent } from '@/app/app/saved/graphql';
import { faList, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { gql, useSubscription } from '@apollo/client';
import OneContentListView from './OneContentListView';
import OneContentGalleryView from './OneContentGalleryView';
import ErrorToast from '@/components/ErrorToast';

const Content = ({
  incomingContent,
  clerkUserId,
}: {
  incomingContent: IGetAllContent[];
  clerkUserId: string;
}) => {
  const [listView, setListView] = useState(() => {
    if (window) {
      const storedData = window.localStorage.getItem('audea__view');

      if (storedData) {
        if (storedData === 'list') {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
  });
  const [contentData, setContentData] = useState(incomingContent);

  const contentLive = gql`
    subscription ContentSubscription($clerkUserId: String!) {
      contentSubscription(clerkUserId: $clerkUserId) {
        content {
          id
          createdAt
          title
          gptGenerated
        }
        mutationType
      }
    }
  `;

  const { data, error: subscriptionError } = useSubscription(contentLive, {
    variables: { clerkUserId },
  });

  useEffect(() => {
    if (data) {
      const { mutationType, content } = data.contentSubscription;

      if (mutationType === 'ADD') {
        setContentData((prevContentData) => [content, ...prevContentData]);
      } else if (mutationType === 'EDIT') {
        setContentData((prevContentData) => {
          const newContent = [...prevContentData];
          const index = newContent.findIndex((obj) => obj.id === content.id);

          if (index !== -1) {
            newContent[index] = content;
          }

          return newContent;
        });
      } else if (mutationType === 'DELETE') {
        setContentData((prevContentData) =>
          prevContentData.filter((obj) => obj.id !== content.id)
        );
      }
    }
  }, [data]);

  useEffect(() => {
    if (subscriptionError) {
      ErrorToast('getting live updated content', subscriptionError);
    }
  }, [subscriptionError]);

  return (
    <motion.section
      className={`flex flex-col gap-10 mt-10 pb-10 sm:px-10 px-4 max-w-[1300px] mx-auto w-full select-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Saved Notes</h1>

        <section className="flex gap-2 items-center justify-center">
          <button
            className={`${
              listView ? 'bg-secondary text-secondary-foreground' : ''
            } rounded-md shadow-sm text-lg w-[35px] h-[35px] flex items-center justify-center`}
            onClick={() => {
              setListView(true);
              localStorage.setItem('audea__view', 'list');
            }}
            aria-label="List view"
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            className={`${
              !listView ? 'bg-secondary text-secondary-foreground' : ''
            } rounded-md shadow-sm text-lg w-[35px] h-[35px] flex items-center justify-center`}
            onClick={() => {
              setListView(false);
              localStorage.setItem('audea__view', 'gallery');
            }}
            aria-label="Gallery view"
          >
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </button>
        </section>
      </section>

      {listView ? (
        <section className="flex flex-col gap-4 w-full">
          {contentData.map((value) => {
            return (
              <OneContentListView
                key={`${value.id}-list`}
                contentId={value.id}
                title={value.title}
                date={value.createdAt}
              />
            );
          })}
        </section>
      ) : (
        <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4">
          {contentData.map((value) => {
            return (
              <OneContentGalleryView
                contentId={value.id}
                title={value.title}
                gptGenerated={value.gptGenerated}
                date={value.createdAt}
                key={`${value.id}-gallery`}
              />
            );
          })}
        </section>
      )}
    </motion.section>
  );
};

export default Content;
