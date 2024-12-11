'use client';

import { useSearchParams } from 'next/navigation';
import { Input } from '@nextui-org/react';

import * as actions from '@/actions';

export default function SearchInput() {
  const serachParams = useSearchParams();

  return (
    <form action={actions.Search}>
      <Input name="term" defaultValue={serachParams.get('term') || ''} />
    </form>
  );
}
