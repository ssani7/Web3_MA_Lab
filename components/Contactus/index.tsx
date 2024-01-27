import { TextareaAutosize, TextField } from '@mui/material';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { RiTwitterXFill } from 'react-icons/ri';

export default function ContactUs() {
  return (
    <div id="contractus" className="py-20 mx-16 text-center">
      <h2 className="text-6xl font-bold">Contact Us</h2>
      <div className="mt-20 text-left gap-16 py-16 ">
        <p className="text-lg mb-4">Drop us a Line</p>
        <div className="flex">
          <div className="flex gap-5 w-full flex-col">
            <TextField
              inputProps={{
                className:
                  'text-white text-lg focus:outline-none active:outline-none ',
              }}
              className="outline outline-1 "
              placeholder="E-mail"
              variant="outlined"
              type="email"
            />
            <div className="flex gap-3">
              <TextField
                inputProps={{
                  className:
                    'text-white text-lg focus:outline-none active:outline-none ',
                }}
                className="outline outline-1 "
                placeholder="First Name"
                variant="outlined"
                type="email"
                fullWidth
              />
              <TextField
                inputProps={{
                  className:
                    'text-white text-lg focus:outline-none active:outline-none ',
                }}
                className="outline outline-1 "
                placeholder="Second Name"
                fullWidth
                variant="outlined"
                type="email"
              />
            </div>
            <TextareaAutosize
              className="bg-inherit py-2 px-3 outline text-lg outline-1 !focus-visible:outline-offset-2  !focus-visible:outline-1 active:outline active:outline-1 resize-none"
              minRows={5}
              placeholder="Messages"
            />
          </div>
          <div className="space-y-5 w-full">
            <IoMdMail className="text-[5.5rem] ml-[30%] bg-[#87286F] p-5 rounded-full" />
            <FaTelegramPlane className="text-[5.5rem] ml-[70%] bg-[#2AABEE] p-5 rounded-full" />
            <RiTwitterXFill className="text-[5.5rem] ml-[50%] bg-black p-5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
