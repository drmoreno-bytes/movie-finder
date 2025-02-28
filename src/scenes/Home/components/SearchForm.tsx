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
        <form className="pt-5" onSubmit={onSubmit}>
            <InputText
                type="search"
                onKeyDown={onKeyDown}
                onChange={onChangeTitle}
                value={title}
                name="query"
                placeholder="Search for a movie"
                className="w-96"
            />
            <Dropdown
                value={type}
                onChange={onChangeType}
                options={['movie', 'series']}
                optionLabel="name"
                placeholder="Select a type"
                className="w-36"
                name="type"
            />
            <Button
                type="submit"
                label="Search"
                outlined
                className="text-[#da2f68] border-[#da2f68] ml-2 hover:bg-red-100"
            />
        </form>
    );
};
