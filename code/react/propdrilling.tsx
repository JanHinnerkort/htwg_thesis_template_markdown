interface IProps {
    user: User,
}

const ChildFunction: React.FC<IProps> = ({ user }) => {
    return (
        <div> Hallo {user?.data?.first}!</div>
    )
} 