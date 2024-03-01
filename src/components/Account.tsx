export interface AccountComponentProps {
  address: string;
  disconnect: () => void;
  ensName: string | null;
  ensAvatar: string | null;
}

const AccountComponent: React.FC<AccountComponentProps> = ({
  address,
  disconnect,
  ensName,
  ensAvatar,
}) => (
  <div className="flex items-center gap-2 justify-evenly">
    <span className="hidden md:block">Address: {address}</span>
    <button
      onClick={disconnect}
      className="px-4 py-2 text-white bg-indigo-600  rounded-md md:ml-5"
    >
      Disconnect
    </button>
  </div>
);

export default AccountComponent;
