'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/ui/multi-select';
import { toTitleCase } from '@/lib/utils';
import { Option } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import { SelectField } from '@/components/ui/select-field';

export function StandardInfo() {
  const categories = ['Old', 'Young'];

  // CATEGORY FILTER
  // links and unlinks the slected categories with a dot and creates a new query string with the selected categories to filter the products
  const [selectedCategories, setSelectedCategories] = React.useState<
    Option[] | null
  >(null);

  return (
    <div className=" grid lg:grid-cols-2  gap-4  ">
      <Input placeholder="What is your username?" />
      <Input type="number" placeholder="What is your age?" />
      <Input type="number" placeholder="What is your age?" />
      <div className=" lg:col-span-2">
        <SelectField />
      </div>

      {categories?.length && (
        <MultiSelect
          placeholder="Select categories"
          selected={selectedCategories}
          setSelected={setSelectedCategories}
          options={categories.map((c) => ({
            label: toTitleCase(c),
            value: c,
          }))}
        />
      )}
      <Textarea placeholder="Describe yourself" />
    </div>
  );
}
