import Web3 from 'web3'


export const getMetamaskAddress = async () => {
  if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {

        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();


        return accounts[0]
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error("MetaMask not detected")
    }
}