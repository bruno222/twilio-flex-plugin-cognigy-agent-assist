import { Box, Button, Separator } from '@twilio-paste/core';
import { withTheme, withTaskContext, Manager } from '@twilio/flex-ui';
import { useEffect, useState } from 'react';

interface Props {
  task?: Task;
}

interface PanelTab {
  name: string;
  url: string;
}

interface Task {
  attributes: {
    url: string;
  };
  sid: string;
}

export const Panel2 = withTaskContext(({ task }: Props) => {
  if (!task) {
    return null;
  }

  const { attributes, sid } = task;

  // Abort in case the attributes are not defined
  if (!attributes || !attributes.url) {
    return null;
  }

  const { url } = attributes;

  return (
    <Box padding="space40" key={`iframe`} height="100vw">
      <iframe src={url} width="100%" height="100%" key={`iframe-${sid}`}></iframe>
    </Box>
  );
});
