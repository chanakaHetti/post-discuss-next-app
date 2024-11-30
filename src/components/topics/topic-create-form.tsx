'use client';

import { useActionState, startTransition } from 'react';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';

export default function TopicCreateForm() {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log('event', event);
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // startTransition(() => {
    //   action(formData);
    // });
  }

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name:"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />

            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border-red-400 rounded">
                {formState.errors._form?.join(', ')}
              </div>
            ) : null}

            <Button type="submit">Create</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}