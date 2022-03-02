import React from "react";
import { useGun } from "@/contexts/gun";
import { Box, Button } from "@chakra-ui/react";
import { useWallet } from "use-wallet";
import { useAuthStore, useChatStore } from "store";
import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";


export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
});

const Login = () => {
  const { setSignature } = useAuthStore();
  const wallet = useWallet();
  const { gun } = useGun();

  const web3 = new Web3(Web3.givenProvider);

  const handleLogout = async () => {
    try {
      await wallet.reset();
      setSignature("");
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfUserExist = (epub: string): boolean => {
    const { _ }: Record<string, any> = gun.get(`profile/${epub}`);
    const hasFound = !!_.put ? true : false;
    return hasFound;
  };

  const handleAuth = async () => {
    try {
      await wallet.connect("injected");
    } catch (err) {
      console.log(err);
    }
  };

  const generateDataToCurrentUser = (epub: string) => {
    gun.get(`profile/${epub}`).put({
      name: "Unnamed",
      contacts: {},
      address: wallet.account,
      chats: {},
      avatar: `https://avatars.dicebear.com/api/croodles/${wallet.account}.svg`,
    });
  };

  const handleSignMessage = async (acc: string): Promise<T> => {
    await web3.eth.personal.sign(
      web3.utils.fromUtf8(`StegChat dApp`),
      acc,
      (err, signature): void => {
        if (err) {
          handleLogout();
        }
        const exist = checkIfUserExist(acc);
        if (!exist) {
          generateDataToCurrentUser(acc);
        }
        setSignature(signature);
      }
    );
  };

  return (
    <Box
      display="flex"
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Button boxShadow="lg" colorScheme="linkedin">
        Connect with Metamask
      </Button>
    </Box>
  );
};

export default Login;
