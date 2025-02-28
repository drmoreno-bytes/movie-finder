type Props = {
    description?: string | null;
};

export const ErrorMessage = ({ description }: Props) => {
    if (!description) return null;
    return (
        <p className="text-[#da2f68] text-xl text-center pt-20">
            {description}
        </p>
    );
};
