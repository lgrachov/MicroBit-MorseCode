input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 0, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
