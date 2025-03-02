import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

type Props = {
    type: string;
    title: string;
    onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeType: (event: DropdownChangeEvent) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchForm = ({
    type,
    title,
    onSubmit,
    onKeyDown,
    onChangeTitle,
    onChangeType,
}: Props) => {
    return (
        <form
            className="flex gap-3 py-1 pr-1 pl-1 bg-white overflow-hidden m-5 rounded-lg"
            onSubmit={onSubmit}
        >
            <InputText
                type="search"
                onKeyDown={onKeyDown}
                onChange={onChangeTitle}
                value={title}
                name="query"
                placeholder="Search for a movie"
                className="w-96 rounded-3xl border-none"
            />
            <Dropdown
                value={type}
                onChange={onChangeType}
                options={[
                    { value: 'movie', name: 'Movie' },
                    { value: 'series', name: 'Series' },
                ]}
                optionLabel="name"
                placeholder="Select a type"
                className="w-36 border-none first-letter:uppercase"
                name="type"
            />
            <Button type="submit" label="Search" outlined />
        </form>
    );
};
