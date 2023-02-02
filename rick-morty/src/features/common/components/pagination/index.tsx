import { CaretLeft, CaretRight } from 'phosphor-react';
import { Button } from '../button';

type IPagination = {
  current: number;
  siblingQuantity: number;
  pages: number;
  onPrev(): void;
  onNext(): void;
  onSetPage(page: number): void;
};

type TGetPageIndex = {
  siblingQuantity: number;
  current: number;
  pages: number;
};

const getPagesIndex = ({ current, pages, siblingQuantity }: TGetPageIndex) => {
  const nextPages = Array(siblingQuantity)
    .fill(null)
    .map((_, index) => {
      const next = current + index + 1;
      const isValid = next <= pages;

      return isValid ? next : false;
    })
    .filter(Boolean) as number[];

  const prevPages = Array(siblingQuantity)
    .fill(null)
    .map((_, index) => {
      const prev = current - siblingQuantity + index;
      const isValid = prev >= 1;
      return isValid ? prev : false;
    })
    .filter(Boolean) as number[];

  const firstPages = prevPages[0] > siblingQuantity + 1 ? [1, 2] : [];

  const lastPages =
    nextPages[nextPages.length - 1] < pages - siblingQuantity ? [pages - 2, pages - 1, pages] : [];

  return {
    prevPages,
    nextPages,
    firstPages,
    lastPages,
  };
};

export const Pagination = (props: IPagination) => {
  const { pages, current, siblingQuantity, onNext, onPrev, onSetPage } = props;

  const { nextPages, prevPages, firstPages, lastPages } = getPagesIndex({
    current,
    pages,
    siblingQuantity,
  });

  return (
    <div className="flex items-center gap-4 [&>button]:w-10 [&>button]:h-10 py-3 px-5 rounded-md bg-zinc-200 dark:bg-zinc-800 border border-gray-400 dark:border-zinc-700">
      <Button disabled={current === 1} onClick={onPrev}>
        <CaretLeft size={32} weight="bold" />
      </Button>

      <div className="flex items-center gap-2">
        {!!firstPages.length && (
          <>
            {firstPages.map((label) => (
              <Button key={label} onClick={() => onSetPage(label)}>
                {label}
              </Button>
            ))}
            <Button disabled className="flex items-center justify-center">
              ...
            </Button>
          </>
        )}

        {prevPages.map((label) => (
          <Button key={label} onClick={() => onSetPage(label)}>
            {label}
          </Button>
        ))}

        <Button className="bg-amber-600" disabled>
          {current}
        </Button>

        {nextPages.map((label) => (
          <Button key={label} onClick={() => onSetPage(label)}>
            {label}
          </Button>
        ))}

        {!!lastPages.length && (
          <>
            <Button disabled>...</Button>
            {lastPages.map((label) => (
              <Button key={label} onClick={() => onSetPage(label)}>
                {label}
              </Button>
            ))}
          </>
        )}
      </div>

      <Button disabled={current === pages} onClick={onNext}>
        <CaretRight size={32} weight="bold" />
      </Button>
    </div>
  );
};
