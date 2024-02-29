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
  <div className="flex items-center gap-2">
    {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
   Address: {address && <div>{ensName ? ensName : address}</div>}
    <button
      onClick={disconnect}
      className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
    >
      Disconnect
    </button>
  </div>
);

export default AccountComponent;
