import React from 'react';
import { Grid } from '@nextui-org/react';
import { Divider } from '@mui/material';
import { Tooltip } from '@nextui-org/react';
import usePageData from './usePageData';
import Loading from './Loading';

export default function App() {
  const { repos, loading } = usePageData();

  return (
    <>
      <div justify="flex-start" className="p-4">
        {repos.map((item, index) => (
          <Grid xs={12} key={index}>
            <div className="p-4 m-4 hover:shadow-2xl rounded-lg bg-gradient-to-r from-blue-300  hover:to-green-300">
              <Grid.Container className="flex justify-between ">
                <Grid xs={12} sm={12} md={10}>
                  <div className="flex ml-[10px] ">
                    <svg
                      className="octicon octicon-star mr-1 mt-[10px]"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    <div className="text-[22px] font-semibold hover:text-blue-900">
                      <Tooltip
                        color="primary"
                        content={`label: ${item.head.label}`}
                        style={{ width: 'auto' }}
                      >
                        <Grid xs={12}>
                          <a href={item.html_url} target="_blank">
                            {item.title}
                          </a>
                        </Grid>
                      </Tooltip>
                    </div>
                  </div>
                </Grid>
                <Grid sm={12} md={2}>
                  <div className="flex p-2 md:py-3">
                    {item.requested_reviewers.length > 0 ? (
                      <Tooltip
                        color="success"
                        content={item.requested_reviewers.map((reviewer) => (
                          <a
                            href={reviewer.html_url}
                            target="_blank"
                            className="hover:text-blue-900 hover:underline "
                          >
                            {console.log(item.requested_reviewers)}
                            <li>{reviewer.login}</li>
                          </a>
                        ))}
                      >
                        <div className="flex font-bold text-blue-500">
                          reviwers:
                        </div>
                        <div className="px-1 py-[3px] text-[14px]">
                          {item.requested_reviewers.length}
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip color="success" content={'No Reviewer'}>
                        <div className="flex font-bold text-blue-500">
                          Reviwers:
                        </div>
                        <div className="px-1 py-[3px] text-[14px]">
                          {item.requested_reviewers.length}
                        </div>
                      </Tooltip>
                    )}
                  </div>
                </Grid>
              </Grid.Container>

              <Divider />
              <Grid.Container gap={2} className="flex justify-between">
                <Grid xs={12} sm={6} md={2.5}>
                  <div className="flex">
                    <div className="flex font-bold text-green-600">
                      Base Branch:
                    </div>
                    <div className="px-1">{item.base.label}</div>
                  </div>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <div className="flex">
                    <div className="flex font-bold">Author Branch:</div>
                    <div className="px-1"> {item.head.ref}</div>
                  </div>
                </Grid>
                <Grid xs={12} sm={6} md={2.5}>
                  <div className="flex">
                    <div className="flex font-bold">Author:</div>
                    <div className="px-1">{item.user.login}</div>
                  </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                  <div className="flex">
                    <div className="flex font-bold">Created on:</div>
                    <div className="px-1">{item.created_at}</div>
                  </div>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        ))}
      </div>
      {loading && <Loading />}
    </>
  );
}
