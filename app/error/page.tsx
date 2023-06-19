import { notFound } from 'next/navigation';
import Toast from '../app/Toast';
import CopyButton from './CopyButton';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams.message || !searchParams.from) {
    notFound();
  } else {
    const errorMessageJson = JSON.parse(
      decodeURIComponent(searchParams.message.toString())
    );

    const errorMessage = JSON.stringify(errorMessageJson, null, 2);

    const from = decodeURIComponent(searchParams.from.toString());

    return (
      <section className="h-full max-w-[1300px] m-auto w-full mt-10 px-4">
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <div className="w-full h-fit max-w-[1000px]">
            <h1 className="text-2xl font-bold select-none">
              Oops, there&apos;s an error generating page{' '}
              <code className="px-4 py-1 rounded-md dark:bg-gray-700 bg-gray-200 text-orange-500 select-text">
                {from}
              </code>
            </h1>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full h-fit max-w-[1000px] select-none">
              <p className="text-muted-foreground">Error message</p>
            </div>

            <div className="dark:bg-gray-700 bg-gray-200 max-w-[1000px] max-h-[500px] w-full h-fit rounded-lg overflow-x-hidden overflow-y-scroll relative">
              <pre
                style={{ whiteSpace: 'pre-wrap' }}
                className="w-full h-full p-4"
              >
                {errorMessage}
              </pre>
            </div>

            <CopyButton text={errorMessage} />
          </div>

          <div className="w-full h-fit max-w-[1000px] select-none">
            <p>
              Some helpful links:{' '}
              <a
                className="text-blue-500 underline"
                href="https://join.slack.com/t/audeance/shared_invite/zt-1vn35z04j-OU8FpGdh45LrxgM3r0jESA"
              >
                Slack
              </a>
            </p>
          </div>
        </div>

        <Toast />
      </section>
    );
  }
}