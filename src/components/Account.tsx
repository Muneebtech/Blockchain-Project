export interface AccountComponentProps {
  address: any;
  disconnect: () => void;
  ensName: string | any;
  ensAvatar: string | any;
}

const AccountComponent: React.FC<AccountComponentProps> = ({
  address,
  disconnect,
  ensName,
  ensAvatar,
}) => (
  <div className="flex items-center gap-2 justify-evenly">
    <button
      onClick={disconnect}
      className="px-4 py-2 text-white bg-indigo-600  rounded-md md:ml-5"
    >
      Disconnect Wallet
    </button>
  </div>
);

export default AccountComponent;
