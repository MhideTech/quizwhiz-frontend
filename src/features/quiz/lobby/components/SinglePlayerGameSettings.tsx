import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Switch } from '@/common/components/ui/switch';
import { Label } from '@/common/components/ui/label';
import { Slider } from '@/common/components/ui/slider';
import { Settings, Zap, Timer, Shuffle, Lightbulb } from 'lucide-react';

interface SinglePlayerGameSettingsData {
  showAnswers: boolean;
  timePerQuestion: number;
  randomizeQuestions: boolean;
  allowHints: boolean;
  instantFeedback: boolean;
}

interface SinglePlayerGameSettingsProps {
  settings: SinglePlayerGameSettingsData;
  onSettingsChange: (settings: Partial<SinglePlayerGameSettingsData>) => void;
}

const SinglePlayerGameSettings: React.FC<SinglePlayerGameSettingsProps> = ({
  settings,
  onSettingsChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Settings className='w-5 h-5 text-quiz-primary' />
          Game Settings
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Zap className='w-4 h-4 text-gray-500' />
            <Label htmlFor='instant-feedback' className='text-sm font-medium'>
              Instant feedback after each question
            </Label>
          </div>
          <Switch
            id='instant-feedback'
            checked={settings.instantFeedback}
            onCheckedChange={(checked) => onSettingsChange({ instantFeedback: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Timer className='w-4 h-4 text-gray-500' />
            <Label htmlFor='show-answers' className='text-sm font-medium'>
              Show correct answers at the end
            </Label>
          </div>
          <Switch
            id='show-answers'
            checked={settings.showAnswers}
            onCheckedChange={(checked) => onSettingsChange({ showAnswers: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Shuffle className='w-4 h-4 text-gray-500' />
            <Label htmlFor='randomize-questions' className='text-sm font-medium'>
              Randomize question order
            </Label>
          </div>
          <Switch
            id='randomize-questions'
            checked={settings.randomizeQuestions}
            onCheckedChange={(checked) => onSettingsChange({ randomizeQuestions: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Lightbulb className='w-4 h-4 text-gray-500' />
            <Label htmlFor='allow-hints' className='text-sm font-medium'>
              Enable hints (if available)
            </Label>
          </div>
          <Switch
            id='allow-hints'
            checked={settings.allowHints}
            onCheckedChange={(checked) => onSettingsChange({ allowHints: checked })}
          />
        </div>

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Timer className='w-4 h-4 text-gray-500' />
            <Label className='text-sm font-medium'>
              Time per question:{' '}
              {settings.timePerQuestion === 0 ? 'No limit' : `${settings.timePerQuestion}s`}
            </Label>
          </div>
          <Slider
            value={[settings.timePerQuestion]}
            onValueChange={([value]) => onSettingsChange({ timePerQuestion: value })}
            max={120}
            min={0}
            step={5}
            className='w-full'
          />
          <div className='flex justify-between text-xs text-gray-500'>
            <span>No limit</span>
            <span>30s</span>
            <span>60s</span>
            <span>120s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SinglePlayerGameSettings;
