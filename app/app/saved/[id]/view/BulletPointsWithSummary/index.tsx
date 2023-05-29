'use client';

import moment from 'moment';

export const BulletPointsWithSummary = ({
  content,
  title,
  createdAt,
  dir,
}: {
  content: any[];
  title: string;
  createdAt: string;
  dir: 'rtl' | 'ltr';
}) => {
  let summary: any[] = [];

  let additionalInfo: any[] = [];

  let bulletPointsToIterate: any[] = [];

  let headingOneCount: number = 0;

  for (const item of content) {
    const { type, content } = item;

    if (type === 'heading_1') {
      if (headingOneCount < 1) {
        summary.push({ type, content });
      } else {
        additionalInfo.push({ type, content });
      }

      headingOneCount++;
    }

    if (headingOneCount < 2 && type === 'paragraph') {
      summary.push({ type, content });
    }

    if (type === 'heading_2' || type === 'bulleted_list_item') {
      bulletPointsToIterate.push({ type, content });
    }
  }

  const bulletPoints: any[] = [];
  let currentHeadingTwo;

  for (const item of bulletPointsToIterate) {
    if (item.type === 'heading_2') {
      currentHeadingTwo = item;
      currentHeadingTwo.children = [];
      bulletPoints.push(currentHeadingTwo);
    } else if (currentHeadingTwo) {
      currentHeadingTwo.children.push(item);
    }
  }
  return (
    <section className="flex flex-col gap-14" dir={dir}>
      <header className="flex flex-col gap-2">
        <h1 className="sm:text-4xl text-3xl font-bold text-primaryDark">
          {title}
        </h1>
        <p>
          Created{' '}
          <span className="text-onPrimary/70">
            @ {moment(createdAt).format('DD MMMM YYYY, HH:mm')}
          </span>
        </p>
      </header>

      <article className="flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          {summary.map(({ type, content }, index) => {
            if (type === 'heading_1') {
              return (
                <h1
                  key={`${index}-summary`}
                  className="sm:text-3xl text-2xl font-bold"
                >
                  {content}
                </h1>
              );
            } else if (type === 'paragraph') {
              return (
                <p key={`${index}-summary`} className="">
                  {content}
                </p>
              );
            } else {
              return <></>;
            }
          })}
        </section>

        <section>
          <h2 className="sm:text-3xl text-2xl font-bold my-6">
            {additionalInfo[0].content}
          </h2>

          <section className="flex flex-col gap-6">
            {bulletPoints.map(({ content, children }, index) => {
              return (
                <section
                  key={`${index}-bulletPoints`}
                  className="flex flex-col gap-2"
                >
                  <h3 className="sm:text-2xl text-xl font-medium">{content}</h3>
                  <ul className="flex flex-col gap-1 list-disc list-inside">
                    {children.map((value: any, index: any) => {
                      return (
                        <li key={`${index}-bulletPoint-Child`} className="">
                          {value.content}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </section>
        </section>
      </article>
    </section>
  );
};
