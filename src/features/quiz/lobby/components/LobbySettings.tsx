import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Switch } from '@/common/components/ui/switch';
import { Label } from '@/common/components/ui/label';
import { Slider } from '@/common/components/ui/slider';
import { Settings } from 'lucide-react';

interface LobbySettingsData {
  allowLateJoin: boolean;
  showAnswers: boolean;
  timePerQuestion: number;
  randomizeQuestions: boolean;
  allowHints: boolean;
}

interface LobbySettingsProps {
  settings: LobbySettingsData;
  onSettingsChange: (settings: Partial<LobbySettingsData>) => void;
  isHost: boolean;
}

const LobbySettings: React.FC<LobbySettingsProps> = ({ settings, onSettingsChange, isHost }) => {
  if (!isHost) return null;

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
          <Label htmlFor='allow-late-join' className='text-sm font-medium'>
            Allow players to join during game
          </Label>
          <Switch
            id='allow-late-join'
            checked={settings.allowLateJoin}
            onCheckedChange={(checked) => onSettingsChange({ allowLateJoin: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <Label htmlFor='show-answers' className='text-sm font-medium'>
            Show correct answers after each question
          </Label>
          <Switch
            id='show-answers'
            checked={settings.showAnswers}
            onCheckedChange={(checked) => onSettingsChange({ showAnswers: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <Label htmlFor='randomize-questions' className='text-sm font-medium'>
            Randomize question order
          </Label>
          <Switch
            id='randomize-questions'
            checked={settings.randomizeQuestions}
            onCheckedChange={(checked) => onSettingsChange({ randomizeQuestions: checked })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <Label htmlFor='allow-hints' className='text-sm font-medium'>
            Allow hints
          </Label>
          <Switch
            id='allow-hints'
            checked={settings.allowHints}
            onCheckedChange={(checked) => onSettingsChange({ allowHints: checked })}
          />
        </div>

        <div className='space-y-3'>
          <Label className='text-sm font-medium'>
            Time per question: {settings.timePerQuestion} seconds
          </Label>
          <Slider
            value={[settings.timePerQuestion]}
            onValueChange={([value]) => onSettingsChange({ timePerQuestion: value })}
            max={120}
            min={10}
            step={5}
            className='w-full'
          />
          <div className='flex justify-between text-xs text-gray-500'>
            <span>10s</span>
            <span>120s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LobbySettings;
