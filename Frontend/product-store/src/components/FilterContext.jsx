import React,{createContext,useState,useContext,useEffect} from "react";

const FilterContext = createContext();

export const FilterProvider = ({children})=>{
    const[qt,setqt] = useState(1);

    const [selectedCompany,setSelectedCompany] = useState("All Products");
    const [selectedSustainability,setSelectedSustainability] = useState("all");
    const [searchTerm,setSearchTerm] = useState("");
    const[loginData,setLoginData]=useState(
        JSON.parse(localStorage.getItem("loginData")) || {
            email: "",
            loginPassword: ""
          
    });
    const[signupData,setSignupData]=useState(
        JSON.parse(localStorage.getItem("loginData"))||{
        Fname:"",
        Lname:"",
        signupPassword:"",
        confirmPassword:"",
        phoneNo:"",
        address:"",
    })

    
    const isLoggedIn = loginData.email && loginData.loginPassword;
    const isSignUp = signupData.Fname;

    useEffect(() => {
         {
          localStorage.removeItem("loginData");
        }
      }, []);

    
      

    return(
        <FilterContext.Provider value ={{selectedCompany,setSelectedCompany,selectedSustainability,setSelectedSustainability,searchTerm,
        setSearchTerm,loginData,setLoginData,signupData,setSignupData,
        isLoggedIn,isSignUp,qt,setqt}}>
            {children}
        </FilterContext.Provider>

    );
};

export const useFilter = ()=> useContext(FilterContext);