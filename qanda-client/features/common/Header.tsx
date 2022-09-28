import Image from 'next/image';
import { Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, useMediaQuery, useTheme } from "@mui/material";
import NextLink from '../../components/NextLink';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./header.scss";
import { useEffect, useState } from 'react';
import { FCDialog } from '../../components/Modal';
import { FCEditor } from '../../components/TinymceEditor';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { createQuestionApi } from '../../utils/api/questionApi';
import { apiGetCategory } from '../../utils/api/categoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../components/Category/category.slice';
const Header = () => {
    const theme = useTheme();
    const isTabletUI = useMediaQuery(theme.breakpoints.down("lg"));
    const [isActive, setisActive] = useState<Boolean>(false);
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const [subbject, setSubject] = useState('Choose Subject');


    const stateCategory = useSelector(state => state.categories)


    console.log('stateCategory', stateCategory)
    const [isOpen, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const showAskQuestion = () => {
        setOpen(true);
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    useEffect(() => {
        dispatch(fetchCategories());
    }, [])
    const handleChangeSubject = (event) => {
        setSubject(event.target.value)
    }
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const createQuestion = () => {
        createQuestionApi({ name: title, content: content, categoryId: subbject }).then((res) => {
        })
    }
    const renderContentDialogAskQuestion = () => {
        return (
            <div>
                <TextField placeholder='Title Question'
                    variant="standard"
                    className="title-question"
                    onChange={handleChangeTitle}
                />
                <TextareaAutosize
                    maxRows={10}
                    aria-label="maximum height"
                    placeholder="Write your question here (Keep it simple and clear to get the best answer)"
                    defaultValue=""
                    style={{ width: "100%", borderRadius: "15px", minHeight: "20vh", padding: "10px" }}
                    onChange={(e) => handleContent(e)}
                />


                <FormControl style={{ marginTop: "30px", width: "30%" }}>
                    <InputLabel htmlFor="demo-simple-select-label" className="custom-select-label">Choose Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subbject}
                        onChange={handleChangeSubject}
                        defaultValue="Choose subject"

                    >
                        {/* {categories?.category?.map((category) => (
                            <MenuItem key={category._id} value={category._id}>{category?.name}</MenuItem>
                        ))} */}
                    </Select>
                </FormControl>

                <div className="btn-create-question">
                    <Button variant="contained" onClick={() => createQuestion()}>Ask your question</Button>
                </div>
            </div>
        )
    }

    return <>
        <div className={isActive ? "app-bar-header active" : "app-bar-header"} >
            <Container maxWidth="xl" className="custom-ctn">
                <div className="app-bar-header-nav">
                    <div className="left-nav-header">
                        <NextLink href="/">
                            <div className="logo">
                                <Image src="/images/logo.svg" width={150} height={60} />
                            </div>
                        </NextLink>
                    </div>
                    <div className="center-nav-header">
                        <TextField
                            id="input-with-icon-adornment"
                            placeholder="Search for an answer to any question..."
                        />
                        <Button className="icon-search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon"><path d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z" fill="#212121" fillOpacity="0.52"></path></svg>
                        </Button>
                    </div>
                    <div className="right-nav-header">
                        <Button className="ask-question" onClick={() => showAskQuestion()}>ASK QUESTION</Button>
                        <NotificationsIcon className="notifications" />
                        <Button className="login-panel">Login</Button>
                    </div>
                </div>
            </Container>
        </div>
        <FCDialog
            open={isOpen}
            title={'ASK QUESTION'}
            size="md"
            handleClose={() => {
                setOpen(false)
            }}
            content={renderContentDialogAskQuestion()}
        />
    </>
}
export default Header;